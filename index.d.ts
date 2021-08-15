export namespace Catalog {
	/**
	 * A collection of controls.
	 */
	export interface Catalog {
		/**
		 * A globally unique identifier for this catalog
		 * instance. This UUID should be changed when this
		 * document is revised.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		params: CatalogCommon.Parameter[];
		controls: Control[];
		groups: ControlGroup[];
		backMatter: Metadata.Backmatter;

	}

	/**
	 * A group of controls, or of groups of controls.
	 */
	export interface ControlGroup {
		/**
		 * A unique identifier for a specific group instance
		 * that can be used to reference the group within
		 * this and in other OSCAL documents. This
		 * identifier's uniqueness is document scoped and is
		 * intended to be consistent for the same group
		 * across minor revisions of the document.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		id: string;
		/**
		 * A textual label that provides a sub-type or
		 * characterization of the group.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		/**
		 * A name given to the group, which may be used by a
		 * tool for display and navigation.
		 */
		title: string;
		params: CatalogCommon.Parameter[];
		props: Metadata.Property[];
		links: Metadata.LINK[];
		parts: CatalogCommon.PART[];
		groups: ControlGroup[];
		controls: Control[];

	}

	/**
	 * A structured information object representing a
	 * security or privacy control. Each security or
	 * privacy control within the Catalog is defined by
	 * a distinct control instance.
	 */
	export interface Control {
		/**
		 * A unique identifier for a specific control
		 * instance that can be used to reference the
		 * control in other OSCAL documents. This
		 * identifier's uniqueness is document scoped and is
		 * intended to be consistent for the same control
		 * across minor revisions of the document.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		id: string;
		/**
		 * A textual label that provides a sub-type or
		 * characterization of the control.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		/**
		 * A name given to the control, which may be used by
		 * a tool for display and navigation.
		 */
		title: string;
		params: CatalogCommon.Parameter[];
		props: Metadata.Property[];
		links: Metadata.LINK[];
		parts: CatalogCommon.PART[];
		controls: Control[];

	}


}
export namespace CatalogCommon {
	/**
	 * A partition of a control's definition or a child
	 * of another part.
	 */
	export interface PART {
		/**
		 * A unique identifier for a specific part instance.
		 * This identifier's uniqueness is document scoped
		 * and is intended to be consistent for the same
		 * part across minor revisions of the document.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		id: string;
		/**
		 * A textual label that uniquely identifies the
		 * part's semantic type.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		name: string;
		/**
		 * A namespace qualifying the part's name. This
		 * allows different organizations to associate
		 * distinct semantics with the same name.
		 */
		ns: string;
		/**
		 * A textual label that provides a sub-type or
		 * characterization of the part's name. This can be
		 * used to further distinguish or discriminate
		 * between the semantics of multiple parts of the
		 * same control with the same name and ns.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		/**
		 * A name given to the part, which may be used by a
		 * tool for display and navigation.
		 */
		title: string;
		props: Metadata.Property[];
		/**
		 * Permits multiple paragraphs, lists, tables etc.
		 */
		prose: string;
		parts: PART[];
		links: Metadata.LINK[];

	}

	/**
	 * Parameters provide a mechanism for the dynamic
	 * assignment of value(s) in a control.
	 */
	export interface Parameter {
		/**
		 * A unique identifier for a specific parameter
		 * instance. This identifier's uniqueness is
		 * document scoped and is intended to be consistent
		 * for the same parameter across minor revisions of
		 * the document.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		id: string;
		/**
		 * A textual label that provides a characterization
		 * of the parameter.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		/**
		 * Another parameter invoking this one
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		dependsOn: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * A short, placeholder name for the parameter,
		 * which can be used as a substitute for a value if
		 * no value is assigned.
		 */
		label: string;
		/**
		 * Describes the purpose and use of a parameter
		 */
		usage: string;
		constraints: Constraint[];
		guidelines: Guideline[];
		values: ParameterValue[];
		select: Selection;
		remarks: Metadata.Remarks;

	}

	/**
	 * A formal or informal expression of a constraint
	 * or test
	 */
	export interface Constraint {
		/**
		 * A textual summary of the constraint to be applied.
		 */
		description: string;
		tests: {
			/**
			 * A formal (executable) expression of a constraint
			 * STRING PATTERN: ^\S(.*\S)?$
			 */
			expression: string,
			remarks: Metadata.Remarks,

		}[];

	}

	/**
	 * A prose statement that provides a recommendation
	 * for the use of a parameter.
	 */
	export interface Guideline {
		/**
		 * Prose permits multiple paragraphs, lists, tables
		 * etc.
		 */
		prose: string;

	}

	/**
	 * A parameter value or set of values.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type ParameterValue = string;
	/**
	 * Presenting a choice among alternatives
	 */
	export interface Selection {
		/**
		 * Describes the number of selections that must
		 * occur. Without this setting, only one value
		 * should be assumed to be permitted.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		howMany: string;
		choice: string[];

	}


}
export namespace Metadata {
	/**
	 * Provides information about the publication and
	 * availability of the containing document.
	 */
	export interface Publicationmetadata {
		/**
		 * A name given to the document, which may be used
		 * by a tool for display and navigation.
		 */
		title: string;
		published: PublicationTimestamp;
		lastModified: LastModifiedTimestamp;
		version: DocumentVersion;
		oscalVersion: OSCALversion;
		revisions: RevisionHistoryEntry[];
		documentIds: DocumentIdentifier[];
		props: Property[];
		links: LINK[];
		roles: ROLE[];
		locations: Location[];
		parties: Party[];
		responsibleParties: ResponsibleParty[];
		remarks: Remarks;

	}

	/**
	 * An entry in a sequential list of revisions to the
	 * containing document in reverse chronological
	 * order (i.e., most recent previous revision first).
	 */
	export interface RevisionHistoryEntry {
		/**
		 * A name given to the document revision, which may
		 * be used by a tool for display and navigation.
		 */
		title: string;
		published: PublicationTimestamp;
		lastModified: LastModifiedTimestamp;
		version: DocumentVersion;
		oscalVersion: OSCALversion;
		props: Property[];
		links: LINK[];
		remarks: Remarks;

	}

	/**
	 * A location, with associated metadata that can be
	 * referenced.
	 */
	export interface Location {
		/**
		 * A unique identifier that can be used to reference
		 * this defined location elsewhere in an OSCAL
		 * document. A UUID should be consistently used for
		 * a given location across revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A name given to the location, which may be used
		 * by a tool for display and navigation.
		 */
		title: string;
		address: Address;
		emailAddresses: EmailAddress[];
		telephoneNumbers: TelephoneNumber[];
		urls: string[];
		props: Property[];
		links: LINK[];
		remarks: Remarks;

	}

	/**
	 * References a location defined in metadata.
	 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
	 */
	export type LocationReference = string;
	/**
	 * A responsible entity which is either a person or
	 * an organization.
	 */
	export interface Party {
		/**
		 * A unique identifier that can be used to reference
		 * this defined location elsewhere in an OSCAL
		 * document. A UUID should be consistently used for
		 * a given party across revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A category describing the kind of party the
		 * object describes.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		type: string;
		/**
		 * The full name of the party. This is typically the
		 * legal name associated with the party.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		name: string;
		/**
		 * A short common name, abbreviation, or acronym for
		 * the party.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		shortName: string;
		externalIds: {
			/**
			 * Indicates the type of external identifier.
			 */
			scheme: string,
			id: string,

		}[];
		props: Property[];
		links: LINK[];
		emailAddresses: EmailAddress[];
		telephoneNumbers: TelephoneNumber[];
		addresses: Address[];
		locationUuids: LocationReference[];
		memberOfOrganizations: string[];
		remarks: Remarks;

	}

	/**
	 * References a party defined in metadata.
	 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
	 */
	export type PartyReference = string;
	/**
	 * Defines a function assumed or expected to be
	 * assumed by a party in a specific situation.
	 */
	export interface ROLE {
		/**
		 * A unique identifier for a specific role instance.
		 * This identifier's uniqueness is document scoped
		 * and is intended to be consistent for the same
		 * role across minor revisions of the document.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		id: string;
		/**
		 * A name given to the role, which may be used by a
		 * tool for display and navigation.
		 */
		title: string;
		/**
		 * A short common name, abbreviation, or acronym for
		 * the role.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		shortName: string;
		/**
		 * A summary of the role's purpose and associated
		 * responsibilities.
		 */
		description: string;
		props: Property[];
		links: LINK[];
		remarks: Remarks;

	}

	/**
	 * A reference to the roles served by the user.
	 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
	 */
	export type RoleIdentifierReference = string;
	/**
	 * A collection of resources, which may be included
	 * directly or by reference.
	 */
	export interface Backmatter {
		resources: {
			/**
			 * A globally unique identifier that can be used to
			 * reference this defined resource elsewhere in an
			 * OSCAL document. A UUID should be consistently
			 * used for a given resource across revisions of the
			 * document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * A name given to the resource, which may be used
			 * by a tool for display and navigation.
			 */
			title: string,
			/**
			 * A short summary of the resource used to indicate
			 * the purpose of the resource.
			 */
			description: string,
			props: Metadata.Property[],
			documentIds: Metadata.DocumentIdentifier[],
			/**
			 * A citation consisting of end note text and
			 * optional structured bibliographic data.
			 */
			citation: {
				/**
				 * A line of citation text.
				 */
				text: string,
				props: Metadata.Property[],
				links: Metadata.LINK[],

			},
			rlinks: {
				/**
				 * A resolvable URI reference to a resource.
				 */
				href: string,
				/**
				 * Specifies a media type as defined by the Internet
				 * Assigned Numbers Authority (IANA) Media Types
				 * Registry.
				 * STRING PATTERN: ^\S(.*\S)?$
				 */
				mediaType: string,
				hashes: Metadata.HASH[],

			}[],
			/**
			 * The Base64 alphabet in RFC 2045 - aligned with
			 * XSD.
			 */
			base64: {
				/**
				 * Name of the file before it was encoded as Base64
				 * to be embedded in a resource. This is the name
				 * that will be assigned to the file when the file
				 * is decoded.
				 */
				filename: string,
				/**
				 * Specifies a media type as defined by the Internet
				 * Assigned Numbers Authority (IANA) Media Types
				 * Registry.
				 * STRING PATTERN: ^\S(.*\S)?$
				 */
				mediaType: string,
				value: string,

			},
			remarks: Metadata.Remarks,

		}[];

	}

	/**
	 * An attribute, characteristic, or quality of the
	 * containing object expressed as a namespace
	 * qualified name/value pair. The value of a
	 * property is a simple scalar value, which may be
	 * expressed as a list of values.
	 */
	export interface Property {
		/**
		 * A textual label that uniquely identifies a
		 * specific attribute, characteristic, or quality of
		 * the property's containing object.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		name: string;
		/**
		 * A unique identifier that can be used to reference
		 * this property elsewhere in an OSCAL document. A
		 * UUID should be consistently used for a given
		 * location across revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A namespace qualifying the property's name. This
		 * allows different organizations to associate
		 * distinct semantics with the same name.
		 */
		ns: string;
		/**
		 * Indicates the value of the attribute,
		 * characteristic, or quality.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		value: string;
		/**
		 * A textual label that provides a sub-type or
		 * characterization of the property's name. This can
		 * be used to further distinguish or discriminate
		 * between the semantics of multiple properties of
		 * the same object with the same name and ns.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		remarks: Remarks;

	}

	/**
	 * A reference to a local or remote resource
	 */
	export interface LINK {
		/**
		 * A resolvable URL reference to a resource.
		 */
		href: string;
		/**
		 * Describes the type of relationship provided by
		 * the link. This can be an indicator of the link's
		 * purpose.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		rel: string;
		/**
		 * Specifies a media type as defined by the Internet
		 * Assigned Numbers Authority (IANA) Media Types
		 * Registry.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		mediaType: string;
		/**
		 * A textual label to associate with the link, which
		 * may be used for presentation in a tool.
		 */
		text: string;

	}

	/**
	 * A reference to a set of organizations or persons
	 * that have responsibility for performing a
	 * referenced role in the context of the containing
	 * object.
	 */
	export interface ResponsibleParty {
		/**
		 * The role that the party is responsible for.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		roleId: string;
		partyUuids: PartyReference[];
		props: Property[];
		links: LINK[];
		remarks: Remarks;

	}

	/**
	 * A reference to one or more roles with
	 * responsibility for performing a function relative
	 * to the containing object.
	 */
	export interface ResponsibleRole {
		/**
		 * The role that is responsible for the business
		 * function.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		roleId: string;
		props: Property[];
		links: LINK[];
		partyUuids: PartyReference[];
		remarks: Remarks;

	}

	/**
	 * A representation of a cryptographic digest
	 * generated over a resource using a specified hash
	 * algorithm.
	 */
	export interface HASH {
		/**
		 * Method by which a hash is derived
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		algorithm: string;
		value: string;

	}

	/**
	 * Additional commentary on the containing object.
	 */
	export type Remarks = string;
	/**
	 * The date and time the document was published. The
	 * date-time value must be formatted according to
	 * RFC 3339 with full time and time zone included.
	 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
	 */
	export type PublicationTimestamp = string;
	/**
	 * The date and time the document was last modified.
	 * The date-time value must be formatted according
	 * to RFC 3339 with full time and time zone included.
	 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
	 */
	export type LastModifiedTimestamp = string;
	/**
	 * A string used to distinguish the current version
	 * of the document from other previous (and future)
	 * versions.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type DocumentVersion = string;
	/**
	 * The OSCAL model version the document was authored
	 * against.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type OSCALversion = string;
	/**
	 * An email address as defined by RFC 5322 Section
	 * 3.4.1.
	 * STRING PATTERN: ^.+@.+
	 */
	export type EmailAddress = string;
	/**
	 * Contact number by telephone.
	 */
	export interface TelephoneNumber {
		/**
		 * Indicates the type of phone number.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		type: string;
		number: string;

	}

	/**
	 * A postal address for the location.
	 */
	export interface Address {
		/**
		 * Indicates the type of address.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		type: string;
		addrLines: Addressline[];
		/**
		 * City, town or geographical region for the mailing
		 * address.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		city: string;
		/**
		 * State, province or analogous geographical region
		 * for mailing address
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		state: string;
		/**
		 * Postal or ZIP code for mailing address
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		postalCode: string;
		/**
		 * The ISO 3166-1 alpha-2 country code for the
		 * mailing address.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		country: string;

	}

	/**
	 * A single line of an address.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type Addressline = string;
	/**
	 * A document identifier qualified by an identifier
	 * scheme. A document identifier provides a globally
	 * unique identifier for a group of documents that
	 * are to be treated as different versions of the
	 * same document. If this element does not appear,
	 * or if the value of this element is empty, the
	 * value of "document-id" is equal to the value of
	 * the "uuid" flag of the top-level root element.
	 */
	export interface DocumentIdentifier {
		/**
		 * Qualifies the kind of document identifier using a
		 * URI. If the scheme is not provided the value of
		 * the element will be interpreted as a string of
		 * characters.
		 */
		scheme: string;
		identifier: string;

	}


}
export namespace Profile {
	/**
	 * Each OSCAL profile is defined by a Profile element
	 */
	export interface Profile {
		/**
		 * A globally unique identifier for this profile
		 * instance. This UUID should be changed when this
		 * document is revised.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		imports: Importresource[];
		merge: Mergecontrols;
		modify: Modifycontrols;
		backMatter: Metadata.Backmatter;

	}

	/**
	 * The import designates a catalog, profile, or
	 * other resource to be included (referenced and
	 * potentially modified) by this profile. The import
	 * also identifies which controls to select using
	 * the include-all, include-controls, and
	 * exclude-controls directives.
	 */
	export interface Importresource {
		/**
		 * A resolvable URL reference to the base catalog or
		 * profile that this profile is tailoring.
		 */
		href: string;
		includeAll: InsertAll;
		includeControls: CALL[];
		excludeControls: CALL[];

	}

	/**
	 * A Merge element merges controls in resolution.
	 */
	export interface Mergecontrols {
		combine: Combinationrule;
		asIs: ASIS;
		custom: Customgrouping;

	}

	/**
	 * A Combine element defines whether and how to
	 * combine multiple (competing) versions of the same
	 * control
	 */
	export interface Combinationrule {
		/**
		 * How clashing controls should be handled
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		method: string;

	}

	/**
	 * An As-is element indicates that the controls
	 * should be structured in resolution as they are
	 * structured in their source catalogs. It does not
	 * contain any elements or attributes.
	 */
	export type ASIS = boolean;
	/**
	 * A Custom element frames a structure for embedding
	 * represented controls in resolution.
	 */
	export interface Customgrouping {
		groups: Controlgroup[];
		insertControls: Selectcontrols[];

	}

	/**
	 * A group of (selected) controls or of groups of
	 * controls
	 */
	export interface Controlgroup {
		/**
		 * A unique identifier for a specific group instance
		 * that can be used to reference the group within
		 * this and in other OSCAL documents. This
		 * identifier's uniqueness is document scoped and is
		 * intended to be consistent for the same group
		 * across minor revisions of the document.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		id: string;
		/**
		 * A textual label that provides a sub-type or
		 * characterization of the group.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		/**
		 * A name given to the group, which may be used by a
		 * tool for display and navigation.
		 */
		title: string;
		params: CatalogCommon.Parameter[];
		props: Metadata.Property[];
		links: Metadata.LINK[];
		parts: CatalogCommon.PART[];
		groups: Controlgroup[];
		insertControls: Selectcontrols[];

	}

	/**
	 * Set parameters or amend controls in resolution
	 */
	export interface Modifycontrols {
		setParameters: {
			/**
			 * Indicates the value of the 'id' flag on a target
			 * parameter,  i.e. which parameter to set
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			paramId: string,
			/**
			 * A textual label that provides a characterization
			 * of the parameter.
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			class: string,
			/**
			 * Another parameter invoking this one
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			dependsOn: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			/**
			 * A short, placeholder name for the parameter,
			 * which can be used as a substitute for a value if
			 * no value is assigned.
			 */
			label: string,
			/**
			 * Describes the purpose and use of a parameter
			 */
			usage: string,
			constraints: CatalogCommon.Constraint[],
			guidelines: CatalogCommon.Guideline[],
			values: CatalogCommon.ParameterValue[],
			select: CatalogCommon.Selection,

		}[];
		alters: Alteration[];

	}

	/**
	 * Specifies which controls to use in the containing
	 * context.
	 */
	export interface Selectcontrols {
		/**
		 * A designation of how a selection of controls in a
		 * profile is to be ordered.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		order: string;
		includeAll: InsertAll;
		includeControls: CALL[];
		excludeControls: CALL[];

	}

	/**
	 * Insert all controls from the imported catalog or
	 * profile resources identified in the import
	 * directive.
	 */
	export interface InsertAll {
		[key: string]: any
	}

	/**
	 * Call a control by its ID
	 */
	export interface CALL {
		/**
		 * When a control is included, whether its child
		 * (dependent) controls are also included.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		withChildControls: string;
		withIds: string[];
		matching: {
			/**
			 * A glob expression matching the IDs of one or more
			 * controls to be selected.
			 * STRING PATTERN: ^\S(.*\S)?$
			 */
			pattern: string,

		}[];

	}

	/**
	 * An Alter element specifies changes to be made to
	 * an included control when a profile is resolved.
	 */
	export interface Alteration {
		/**
		 * A reference to a control with a corresponding id
		 * value.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		controlId: string;
		removes: Removal[];
		adds: Addition[];

	}

	/**
	 * Specifies objects to be removed from a control
	 * based on specific aspects of the object that must
	 * all match.
	 */
	export interface Removal {
		/**
		 * Identify items to remove by matching their
		 * assigned name
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		byName: string;
		/**
		 * Identify items to remove by matching their class.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		byClass: string;
		/**
		 * Identify items to remove indicated by their id.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		byId: string;
		/**
		 * Identify items to remove by the name of the
		 * item's information element name, e.g. title or
		 * prop
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		byItemName: string;
		/**
		 * Identify items to remove by the item's ns, which
		 * is the namespace associated with a part, or prop.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		byNs: string;

	}

	/**
	 * Specifies contents to be added into controls, in
	 * resolution
	 */
	export interface Addition {
		/**
		 * Where to add the new content with respect to the
		 * targeted element (beside it or inside it)
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		position: string;
		/**
		 * Target location of the addition.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		byId: string;
		/**
		 * A name given to the control, which may be used by
		 * a tool for display and navigation.
		 */
		title: string;
		params: CatalogCommon.Parameter[];
		props: Metadata.Property[];
		links: Metadata.LINK[];
		parts: CatalogCommon.PART[];

	}


}
export namespace ComponentDefinition {
	/**
	 * A collection of component descriptions, which may
	 * optionally be grouped by capability.
	 */
	export interface ComponentDefinition {
		/**
		 * A globally unique identifier for this component
		 * definition instance. This UUID should be changed
		 * when this document is revised.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		importComponentDefinitions: ImportComponentDefinition[];
		components: Component[];
		capabilities: Capability[];
		backMatter: Metadata.Backmatter;

	}

	/**
	 * Loads a component definition from another
	 * resource.
	 */
	export interface ImportComponentDefinition {
		/**
		 * A link to a resource that defines a set of
		 * components and/or capabilities to import into
		 * this collection.
		 */
		href: string;

	}

	/**
	 * A defined component that can be part of an
	 * implemented system.
	 */
	export interface Component {
		/**
		 * The unique identifier for the component.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A category describing the purpose of the
		 * component.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		type: string;
		/**
		 * A human readable name for the component.
		 */
		title: string;
		/**
		 * A description of the component, including
		 * information about its function.
		 */
		description: string;
		/**
		 * A summary of the technological or business
		 * purpose of the component.
		 */
		purpose: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		responsibleRoles: Metadata.ResponsibleRole[];
		protocols: ImplementationCommon.ServiceProtocolInformation[];
		controlImplementations: ControlImplementationSet[];
		remarks: Metadata.Remarks;

	}

	/**
	 * A grouping of other components and/or
	 * capabilities.
	 */
	export interface Capability {
		/**
		 * A unique identifier for a capability.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The capability's human-readable name.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		name: string;
		/**
		 * A summary of the capability.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		incorporatesComponents: IncorporatesComponent[];
		controlImplementations: ControlImplementationSet[];
		remarks: Metadata.Remarks;

	}

	/**
	 * TBD
	 */
	export interface IncorporatesComponent {
		/**
		 * A reference to a component by its identifier
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		componentUuid: string;
		/**
		 * A description of the component, including
		 * information about its function.
		 */
		description: string;

	}

	/**
	 * Defines how the component or capability supports
	 * a set of controls.
	 */
	export interface ControlImplementationSet {
		/**
		 * A unique identifier for the set of implemented
		 * controls.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A reference to an OSCAL catalog or profile
		 * providing the referenced control or subcontrol
		 * definition.
		 */
		source: string;
		/**
		 * A description of how the specified set of
		 * controls are implemented for the containing
		 * component or capability.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		setParameters: ImplementationCommon.SetParameterValue[];
		implementedRequirements: ControlImplementation[];

	}

	/**
	 * Describes how the containing component or
	 * capability implements an individual control.
	 */
	export interface ControlImplementation {
		/**
		 * A unique identifier for a specific control
		 * implementation.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A reference to a control with a corresponding id
		 * value.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		controlId: string;
		/**
		 * A description of how the specified control is
		 * implemented for the containing component or
		 * capability.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		setParameters: ImplementationCommon.SetParameterValue[];
		responsibleRoles: Metadata.ResponsibleRole[];
		statements: ControlStatementImplementation[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies which statements within a control are
	 * addressed.
	 */
	export interface ControlStatementImplementation {
		/**
		 * A reference to a control statement by its
		 * identifier
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		statementId: string;
		/**
		 * A globally unique identifier that can be used to
		 * reference this control statement entry elsewhere
		 * in an OSCAL document. A UUID should be
		 * consistently used for a given resource across
		 * revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A summary of how the containing control statement
		 * is implemented by the component or capability.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		responsibleRoles: Metadata.ResponsibleRole[];
		remarks: Metadata.Remarks;

	}


}
export namespace ImplementationCommon {
	/**
	 * A defined component that can be part of an
	 * implemented system.
	 */
	export interface Component {
		/**
		 * The unique identifier for the component.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A category describing the purpose of the
		 * component.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		type: string;
		/**
		 * A human readable name for the system component.
		 */
		title: string;
		/**
		 * A description of the component, including
		 * information about its function.
		 */
		description: string;
		/**
		 * A summary of the technological or business
		 * purpose of the component.
		 */
		purpose: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * Describes the operational status of the system
		 * component.
		 */
		status: {
			/**
			 * The operational status.
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			state: string,
			remarks: Metadata.Remarks,

		};
		responsibleRoles: Metadata.ResponsibleRole[];
		protocols: ServiceProtocolInformation[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Information about the protocol used to provide a
	 * service.
	 */
	export interface ServiceProtocolInformation {
		/**
		 * A globally unique identifier that can be used to
		 * reference this service protocol entry elsewhere
		 * in an OSCAL document. A UUID should be
		 * consistently used for a given resource across
		 * revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The common name of the protocol, which should be
		 * the appropriate "service name" from the IANA
		 * Service Name and Transport Protocol Port Number
		 * Registry.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		name: string;
		/**
		 * A human readable name for the protocol (e.g.,
		 * Transport Layer Security).
		 */
		title: string;
		portRanges: PortRange[];

	}

	/**
	 * Where applicable this is the IPv4 port range on
	 * which the service operates.
	 */
	export interface PortRange {
		/**
		 * Indicates the starting port number in a port range
		 */
		start: number;
		/**
		 * Indicates the ending port number in a port range
		 */
		end: number;
		/**
		 * Indicates the transport type.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		transport: string;

	}

	/**
	 * Indicates the degree to which the a given control
	 * is implemented.
	 */
	export interface ImplementationStatus {
		/**
		 * Identifies the implementation status of the
		 * control or control objective.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		state: string;
		remarks: Metadata.Remarks;

	}

	/**
	 * A type of user that interacts with the system
	 * based on an associated role.
	 */
	export interface SystemUser {
		/**
		 * The unique identifier for the user class.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A name given to the user, which may be used by a
		 * tool for display and navigation.
		 */
		title: string;
		/**
		 * A short common name, abbreviation, or acronym for
		 * the user.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		shortName: string;
		/**
		 * A summary of the user's purpose within the system.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		roleIds: Metadata.RoleIdentifierReference[];
		authorizedPrivileges: Privilege[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies a specific system privilege held by
	 * the user, along with an associated description
	 * and/or rationale for the privilege.
	 */
	export interface Privilege {
		/**
		 * A human readable name for the privilege.
		 */
		title: string;
		/**
		 * A summary of the privilege's purpose within the
		 * system.
		 */
		description: string;
		functionsPerformed: FunctionsPerformed[];

	}

	/**
	 * Describes a function performed for a given
	 * authorized privilege by this user class.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type FunctionsPerformed = string;
	/**
	 * A single managed inventory item within the system.
	 */
	export interface InventoryItem {
		/**
		 * A globally unique identifier that can be used to
		 * reference this inventory item entry elsewhere in
		 * an OSCAL document. A UUID should be consistently
		 * used for a given resource across revisions of the
		 * document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A summary of the inventory item stating its
		 * purpose within the system.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		responsibleParties: Metadata.ResponsibleParty[];
		implementedComponents: {
			/**
			 * A reference to a component that is implemented as
			 * part of an inventory item.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			componentUuid: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			responsibleParties: Metadata.ResponsibleParty[],
			remarks: Metadata.Remarks,

		}[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies the parameter that will be set by the
	 * enclosed value.
	 */
	export interface SetParameterValue {
		/**
		 * A reference to a parameter within a control,
		 * who's catalog has been imported into the current
		 * implementation context.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		paramId: string;
		values: string[];
		remarks: Metadata.Remarks;

	}

	/**
	 * A unique identifier for the system described by
	 * this system security plan.
	 */
	export interface SystemIdentification {
		/**
		 * Identifies the identification system from which
		 * the provided identifier was assigned.
		 */
		identifierType: string;
		id: string;

	}


}
export namespace SSP {
	/**
	 * A system security plan, such as those described
	 * in NIST SP 800-18
	 */
	export interface SystemSecurityPlan {
		/**
		 * A globally unique identifier for this catalog
		 * instance. This UUID should be changed when this
		 * document is revised.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		importProfile: ImportProfile;
		systemCharacteristics: SystemCharacteristics;
		systemImplementation: SystemImplementation;
		controlImplementation: ControlImplementation;
		backMatter: Metadata.Backmatter;

	}

	/**
	 * Used to import the OSCAL profile representing the
	 * system's control baseline.
	 */
	export interface ImportProfile {
		/**
		 * A resolvable URL reference to the profile to use
		 * as the system's control baseline.
		 */
		href: string;
		remarks: Metadata.Remarks;

	}

	/**
	 * Contains the characteristics of the system, such
	 * as its name, purpose, and security impact level.
	 */
	export interface SystemCharacteristics {
		systemIds: ImplementationCommon.SystemIdentification[];
		/**
		 * The full name of the system.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		systemName: string;
		/**
		 * A short name for the system, such as an acronym,
		 * that is suitable for display in a data table or
		 * summary list.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		systemNameShort: string;
		/**
		 * A summary of the system.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		dateAuthorized: SystemAuthorizationDate;
		/**
		 * The overall information system sensitivity
		 * categorization, such as defined by FIPS-199.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		securitySensitivityLevel: string;
		systemInformation: SystemInformation;
		securityImpactLevel: SecurityImpactLevel;
		status: Status;
		authorizationBoundary: AuthorizationBoundary;
		networkArchitecture: NetworkArchitecture;
		dataFlow: DataFlow;
		responsibleParties: Metadata.ResponsibleParty[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Contains details about all information types that
	 * are stored, processed, or transmitted by the
	 * system, such as privacy information, and those
	 * defined in NIST SP 800-60.
	 */
	export interface SystemInformation {
		props: Metadata.Property[];
		links: Metadata.LINK[];
		informationTypes: {
			/**
			 * A globally unique identifier that can be used to
			 * reference this information type entry elsewhere
			 * in an OSCAL document. A UUID should be
			 * consistently used for a given resource across
			 * revisions of the document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * A human readable name for the information type.
			 * This title should be meaningful within the
			 * context of the system.
			 */
			title: string,
			/**
			 * A summary of how this information type is used
			 * within the system.
			 */
			description: string,
			categorizations: {
				/**
				 * Specifies the information type identification
				 * system used.
				 */
				system: string,
				informationTypeIds: string[],

			}[],
			props: Metadata.Property[],
			links: Metadata.LINK[],
			/**
			 * The expected level of impact resulting from the
			 * unauthorized disclosure of the described
			 * information.
			 */
			confidentialityImpact: {
				props: Metadata.Property[],
				links: Metadata.LINK[],
				base: SSP.BaseLevel,
				selected: SSP.SelectedLevel,
				adjustmentJustification: SSP.AdjustmentJustification,

			},
			/**
			 * The expected level of impact resulting from the
			 * unauthorized modification of the described
			 * information.
			 */
			integrityImpact: {
				props: Metadata.Property[],
				links: Metadata.LINK[],
				base: SSP.BaseLevel,
				selected: SSP.SelectedLevel,
				adjustmentJustification: SSP.AdjustmentJustification,

			},
			/**
			 * The expected level of impact resulting from the
			 * disruption of access to or use of the described
			 * information or the information system.
			 */
			availabilityImpact: {
				props: Metadata.Property[],
				links: Metadata.LINK[],
				base: SSP.BaseLevel,
				selected: SSP.SelectedLevel,
				adjustmentJustification: SSP.AdjustmentJustification,

			},

		}[];

	}

	/**
	 * The prescribed base (Confidentiality, Integrity,
	 * or Availability) security impact level.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type BaseLevel = string;
	/**
	 * The selected (Confidentiality, Integrity, or
	 * Availability) security impact level.
	 * STRING PATTERN: ^\S(.*\S)?$
	 */
	export type SelectedLevel = string;
	/**
	 * If the selected security level is different from
	 * the base security level, this contains the
	 * justification for the change.
	 */
	export type AdjustmentJustification = string;
	/**
	 * The overall level of expected impact resulting
	 * from unauthorized disclosure, modification, or
	 * loss of access to information.
	 */
	export interface SecurityImpactLevel {
		/**
		 * A target-level of confidentiality for the system,
		 * based on the sensitivity of information within
		 * the system.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		securityObjectiveConfidentiality: string;
		/**
		 * A target-level of integrity for the system, based
		 * on the sensitivity of information within the
		 * system.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		securityObjectiveIntegrity: string;
		/**
		 * A target-level of availability for the system,
		 * based on the sensitivity of information within
		 * the system.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		securityObjectiveAvailability: string;

	}

	/**
	 * Describes the operational status of the system.
	 */
	export interface Status {
		/**
		 * The current operating status.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		state: string;
		remarks: Metadata.Remarks;

	}

	/**
	 * The date the system received its authorization.
	 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))(Z|[+-][0-9]{2}:[0-9]{2})?$
	 */
	export type SystemAuthorizationDate = string;
	/**
	 * A description of this system's authorization
	 * boundary, optionally supplemented by diagrams
	 * that illustrate the authorization boundary.
	 */
	export interface AuthorizationBoundary {
		/**
		 * A summary of the system's authorization boundary.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		diagrams: Diagram[];
		/**
		 * Commentary about the system's authorization
		 * boundary that enhances the diagram.
		 */
		remarks: string;

	}

	/**
	 * A graphic that provides a visual representation
	 * the system, or some aspect of it.
	 */
	export interface Diagram {
		/**
		 * The identifier for this diagram.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A summary of the diagram.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * A brief caption to annotate the diagram.
		 */
		caption: string;
		/**
		 * Commentary about the diagram that enhances it.
		 */
		remarks: string;

	}

	/**
	 * A description of the system's network
	 * architecture, optionally supplemented by diagrams
	 * that illustrate the network architecture.
	 */
	export interface NetworkArchitecture {
		/**
		 * A summary of the system's network architecture.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		diagrams: Diagram[];
		remarks: Metadata.Remarks;

	}

	/**
	 * A description of the logical flow of information
	 * within the system and across its boundaries,
	 * optionally supplemented by diagrams that
	 * illustrate these flows.
	 */
	export interface DataFlow {
		/**
		 * A summary of the system's data flow.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		diagrams: Diagram[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Provides information as to how the system is
	 * implemented.
	 */
	export interface SystemImplementation {
		props: Metadata.Property[];
		links: Metadata.LINK[];
		leveragedAuthorizations: {
			/**
			 * A globally unique identifier that can be used to
			 * reference this leveraged authorization entry
			 * elsewhere in an OSCAL document. A UUID should be
			 * consistently used for a given resource across
			 * revisions of the document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * A human readable name for the leveraged
			 * authorization in the context of the system.
			 */
			title: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			/**
			 * A reference to the party that manages the
			 * leveraged system.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			partyUuid: string,
			dateAuthorized: SSP.SystemAuthorizationDate,
			remarks: Metadata.Remarks,

		}[];
		users: ImplementationCommon.SystemUser[];
		components: ImplementationCommon.Component[];
		inventoryItems: ImplementationCommon.InventoryItem[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Describes how the system satisfies a set of
	 * controls.
	 */
	export interface ControlImplementation {
		/**
		 * A statement describing important things to know
		 * about how this set of control satisfaction
		 * documentation is approached.
		 */
		description: string;
		setParameters: ImplementationCommon.SetParameterValue[];
		implementedRequirements: ControlbasedRequirement[];

	}

	/**
	 * Describes how the system satisfies an individual
	 * control.
	 */
	export interface ControlbasedRequirement {
		/**
		 * A globally unique identifier that can be used to
		 * reference this control requirement entry
		 * elsewhere in an OSCAL document. A UUID should be
		 * consistently used for a given resource across
		 * revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A reference to a control with a corresponding id
		 * value.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		controlId: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		setParameters: ImplementationCommon.SetParameterValue[];
		responsibleRoles: Metadata.ResponsibleRole[];
		statements: SpecificControlStatement[];
		byComponents: ComponentControlImplementation[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies which statements within a control are
	 * addressed.
	 */
	export interface SpecificControlStatement {
		/**
		 * A reference to a control statement by its
		 * identifier
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		statementId: string;
		/**
		 * A globally unique identifier that can be used to
		 * reference this control statement entry elsewhere
		 * in an OSCAL document. A UUID should be
		 * consistently used for a given resource across
		 * revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		responsibleRoles: Metadata.ResponsibleRole[];
		byComponents: ComponentControlImplementation[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Defines how the referenced component implements a
	 * set of controls.
	 */
	export interface ComponentControlImplementation {
		/**
		 * A reference to the component that is implementing
		 * a given control or control statement.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		componentUuid: string;
		/**
		 * A globally unique identifier that can be used to
		 * reference this by-component entry elsewhere in an
		 * OSCAL document. A UUID should be consistently
		 * used for a given resource across revisions of the
		 * document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * An implementation statement that describes how a
		 * control or a control statement is implemented
		 * within the referenced system component.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		setParameters: ImplementationCommon.SetParameterValue[];
		implementationStatus: ImplementationCommon.ImplementationStatus;
		/**
		 * Identifies content intended for external
		 * consumption, such as with leveraged organizations.
		 */
		export: {
			/**
			 * An implementation statement that describes the
			 * aspects of the control or control statement
			 * implementation that can be available to another
			 * system leveraging this system.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			provided: {
				/**
				 * A globally unique identifier that can be used to
				 * reference this provided entry elsewhere in an
				 * OSCAL document. A UUID should be consistently
				 * used for a given resource across revisions of the
				 * document.
				 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
				 */
				uuid: string,
				/**
				 * An implementation statement that describes the
				 * aspects of the control or control statement
				 * implementation that can be provided to another
				 * system leveraging this system.
				 */
				description: string,
				props: Metadata.Property[],
				links: Metadata.LINK[],
				responsibleRoles: Metadata.ResponsibleRole[],
				remarks: Metadata.Remarks,

			}[],
			responsibilities: {
				/**
				 * A globally unique identifier that can be used to
				 * reference this responsibility entry elsewhere in
				 * an OSCAL document. A UUID should be consistently
				 * used for a given resource across revisions of the
				 * document.
				 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
				 */
				uuid: string,
				/**
				 * Identifies a 'provided' assembly associated with
				 * this assembly.
				 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
				 */
				providedUuid: string,
				/**
				 * An implementation statement that describes the
				 * aspects of the control or control statement
				 * implementation that a leveraging system must
				 * implement to satisfy the control provided by a
				 * leveraged system.
				 */
				description: string,
				props: Metadata.Property[],
				links: Metadata.LINK[],
				responsibleRoles: Metadata.ResponsibleRole[],
				remarks: Metadata.Remarks,

			}[],
			remarks: Metadata.Remarks,

		};
		inherited: {
			/**
			 * A globally unique identifier that can be used to
			 * reference this inherited entry elsewhere in an
			 * OSCAL document. A UUID should be consistently
			 * used for a given resource across revisions of the
			 * document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * Identifies a 'provided' assembly associated with
			 * this assembly.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			providedUuid: string,
			/**
			 * An implementation statement that describes the
			 * aspects of a control or control statement
			 * implementation that a leveraging system is
			 * inheriting from a leveraged system.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			responsibleRoles: Metadata.ResponsibleRole[],

		}[];
		satisfied: {
			/**
			 * A globally unique identifier that can be used to
			 * reference this satisfied entry elsewhere in an
			 * OSCAL document. A UUID should be consistently
			 * used for a given resource across revisions of the
			 * document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * Identifies a 'provided' assembly associated with
			 * this assembly.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			responsibilityUuid: string,
			/**
			 * An implementation statement that describes the
			 * aspects of a control or control statement
			 * implementation that a leveraging system is
			 * implementing based on a requirement from a
			 * leveraged system.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			responsibleRoles: Metadata.ResponsibleRole[],
			remarks: Metadata.Remarks,

		}[];
		responsibleRoles: Metadata.ResponsibleRole[];
		remarks: Metadata.Remarks;

	}


}
export namespace AP {
	/**
	 * An assessment plan, such as those provided by a
	 * FedRAMP assessor.
	 */
	export interface SecurityAssessmentPlan {
		/**
		 * Uniquely identifies this assessment plan. This
		 * UUID must be changed each time the content of the
		 * plan changes.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		importSsp: AssessmentCommon.ImportSystemSecurityPlan;
		/**
		 * Used to define data objects that are used in the
		 * assessment plan, that do not appear in the
		 * referenced SSP.
		 */
		localDefinitions: {
			components: ImplementationCommon.Component[],
			inventoryItems: ImplementationCommon.InventoryItem[],
			users: ImplementationCommon.SystemUser[],
			objectivesAndMethods: AssessmentCommon.AssessmentSpecificControlObjective[],
			activities: AssessmentCommon.Activity[],
			remarks: Metadata.Remarks,

		};
		/**
		 * Used to define various terms and conditions under
		 * which an assessment, described by the plan, can
		 * be performed. Each child part defines a different
		 * type of term or condition.
		 */
		termsAndConditions: {
			parts: AssessmentCommon.AssessmentPart[],

		};
		reviewedControls: AssessmentCommon.ReviewedControlsandControlObjectives;
		assessmentSubjects: AssessmentCommon.SubjectofAssessment[];
		assessmentAssets: AssessmentCommon.AssessmentAssets;
		tasks: AssessmentCommon.TASK[];
		backMatter: Metadata.Backmatter;

	}


}
export namespace AssessmentCommon {
	/**
	 * Used by the assessment plan and POA&M to import
	 * information about the system.
	 */
	export interface ImportSystemSecurityPlan {
		/**
		 * >A resolvable URL reference to the system
		 * security plan for the system being assessed.
		 */
		href: string;
		remarks: Metadata.Remarks;

	}

	/**
	 * A local definition of a control objective for
	 * this assessment. Uses catalog syntax for control
	 * objective and assessment actions.
	 */
	export interface AssessmentSpecificControlObjective {
		/**
		 * A reference to a control with a corresponding id
		 * value.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		controlId: string;
		/**
		 * A human-readable description of this control
		 * objective.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		parts: CatalogCommon.PART[];
		remarks: Metadata.Remarks;

	}

	/**
	 * A local definition of a control objective. Uses
	 * catalog syntax for control objective and
	 * assessment activities.
	 */
	export interface AssessmentMethod {
		/**
		 * Uniquely identifies this defined assessment
		 * method. This UUID may be referenced elsewhere in
		 * an OSCAL document when referring to this
		 * information. A UUID should be consistently used
		 * for a given assessment method across revisions of
		 * the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A human-readable description of this assessment
		 * method.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		part: AssessmentPart;
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies an assessment or related process that
	 * can be performed. In the assessment plan, this is
	 * an intended activity which may be associated with
	 * an assessment task. In the assessment results,
	 * this an activity that was actually performed as
	 * part of an assessment.
	 */
	export interface Activity {
		/**
		 * Uniquely identifies this assessment activity.
		 * This UUID may be referenced elsewhere in an OSCAL
		 * document when referring to this information. A
		 * UUID should be consistently used for a given
		 * included activity across revisions of the
		 * document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The title for this included activity.
		 */
		title: string;
		/**
		 * A human-readable description of this included
		 * activity.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		steps: {
			/**
			 * Uniquely identifies a step. This UUID may be
			 * referenced elsewhere in an OSCAL document when
			 * referring to this step. A UUID should be
			 * consistently used for a given test step across
			 * revisions of the document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * The title for this step.
			 */
			title: string,
			/**
			 * A human-readable description of this step.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			reviewedControls: AssessmentCommon.ReviewedControlsandControlObjectives,
			responsibleRoles: Metadata.ResponsibleRole[],
			remarks: Metadata.Remarks,

		}[];
		relatedControls: ReviewedControlsandControlObjectives;
		responsibleRoles: Metadata.ResponsibleRole[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Represents a scheduled event or milestone, which
	 * may be associated with a series of assessment
	 * actions.
	 */
	export interface TASK {
		/**
		 * Uniquely identifies this assessment task.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The type of task.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		type: string;
		/**
		 * The title for this task.
		 */
		title: string;
		/**
		 * A human-readable description of this task.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * The timing under which the task is intended to
		 * occur.
		 */
		timing: {
			/**
			 * The task is intended to occur on the specified
			 * date.
			 */
			onDate: {
				/**
				 * The task must occur on the specified date.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				date: string,

			},
			/**
			 * The task is intended to occur within the
			 * specified date range.
			 */
			withinDateRange: {
				/**
				 * The task must occur on or after the specified
				 * date.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				start: string,
				/**
				 * The task must occur on or before the specified
				 * date.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				end: string,

			},
			/**
			 * The task is intended to occur at the specified
			 * frequency.
			 */
			atFrequency: {
				/**
				 * The task must occur after the specified period
				 * has elapsed.
				 */
				period: number,
				/**
				 * The unit of time for the period.
				 * STRING PATTERN: ^\S(.*\S)?$
				 */
				unit: string,

			},

		};
		dependencies: {
			/**
			 * References a unique task by UUID.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			taskUuid: string,
			remarks: Metadata.Remarks,

		}[];
		tasks: TASK[];
		associatedActivities: {
			/**
			 * References an activity defined in the list of
			 * activities.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			activityUuid: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			responsibleRoles: Metadata.ResponsibleRole[],
			subjects: AssessmentCommon.SubjectofAssessment[],
			remarks: Metadata.Remarks,

		}[];
		subjects: SubjectofAssessment[];
		responsibleRoles: Metadata.ResponsibleRole[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies the controls being assessed and their
	 * control objectives.
	 */
	export interface ReviewedControlsandControlObjectives {
		/**
		 * A human-readable description of control
		 * objectives.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		controlSelections: {
			/**
			 * A human-readable description of in-scope controls
			 * specified for assessment.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			/**
			 * A key word to indicate all.
			 */
			includeAll: {
				[key: string]: any
			},
			includeControls: AssessmentCommon.SelectControl[],
			excludeControls: AssessmentCommon.SelectControl[],
			remarks: Metadata.Remarks,

		}[];
		controlObjectiveSelections: {
			/**
			 * A human-readable description of this collection
			 * of control objectives.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			/**
			 * A key word to indicate all.
			 */
			includeAll: {
				[key: string]: any
			},
			includeObjectives: AssessmentCommon.SelectObjective[],
			excludeObjectives: AssessmentCommon.SelectObjective[],
			remarks: Metadata.Remarks,

		}[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Used to select a control for inclusion/exclusion
	 * based on one or more control identifiers. A set
	 * of statement identifiers can be used to target
	 * the inclusion/exclusion to only specific control
	 * statements providing more granularity over the
	 * specific statements that are within the asessment
	 * scope.
	 */
	export interface SelectControl {
		/**
		 * A reference to a control with a corresponding id
		 * value.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		controlId: string;
		statementIds: string[];

	}

	/**
	 * Used to select a control objective for
	 * inclusion/exclusion based on the control
	 * objective's identifier.
	 */
	export interface SelectObjective {
		/**
		 * Points to an assessment objective.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		objectiveId: string;

	}

	/**
	 * Used when the assessment subjects will be
	 * determined as part of one or more other
	 * assessment activities. These assessment subjects
	 * will be recorded in the assessment results in the
	 * assessment log.
	 */
	export interface AssessmentSubjectPlaceholder {
		/**
		 * Uniquely identifies a set of assessment subjects
		 * that will be identified by a task or an activity
		 * that is part of a task.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A human-readable description of intent of this
		 * assessment subject placeholder.
		 */
		description: string;
		sources: {
			/**
			 * Uniquely identifies an assessment activity to be
			 * performed as part of the event. This UUID may be
			 * referenced elsewhere in an OSCAL document when
			 * referring to this information. A UUID should be
			 * consistently used for this schedule across
			 * revisions of the document.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			taskUuid: string,

		}[];
		props: Metadata.Property[];
		links: Metadata.LINK[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies system elements being assessed, such
	 * as components, inventory items, and locations. In
	 * the assessment plan, this identifies a planned
	 * assessment subject. In the assessment results
	 * this is an actual assessment subject, and
	 * reflects any changes from the plan. exactly what
	 * will be the focus of this assessment. Any
	 * subjects not identified in this way are
	 * out-of-scope.
	 */
	export interface SubjectofAssessment {
		/**
		 * Indicates the type of assessment subject, such as
		 * a component, inventory, item, location, or party
		 * represented by this selection statement.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		type: string;
		/**
		 * A human-readable description of the collection of
		 * subjects being included in this assessment.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * A key word to indicate all.
		 */
		includeAll: {
			[key: string]: any
		};
		includeSubjects: SelectAssessmentSubject[];
		excludeSubjects: SelectAssessmentSubject[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies a set of assessment subjects to
	 * include/exclude by UUID.
	 */
	export interface SelectAssessmentSubject {
		/**
		 * A pointer to a component, inventory-item,
		 * location, party, user, or resource using it's
		 * UUID.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		subjectUuid: string;
		/**
		 * Used to indicate the type of object pointed to by
		 * the uuid-ref within a subject.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		type: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		remarks: Metadata.Remarks;

	}

	/**
	 * A pointer to a resource based on its universally
	 * unique identifier (UUID). Use type to indicate
	 * whether the identified resource is a component,
	 * inventory item, location, user, or something else.
	 */
	export interface IdentifiestheSubject {
		/**
		 * A pointer to a component, inventory-item,
		 * location, party, user, or resource using it's
		 * UUID.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		subjectUuid: string;
		/**
		 * Used to indicate the type of object pointed to by
		 * the uuid-ref within a subject.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		type: string;
		/**
		 * The title or name for the referenced subject.
		 */
		title: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies the assets used to perform this
	 * assessment, such as the assessment team, scanning
	 * tools, and assumptions.
	 */
	export interface AssessmentAssets {
		components: ImplementationCommon.Component[];
		assessmentPlatforms: {
			/**
			 * Uniquely identifies this assessment Platform.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * The title or name for the assessment platform.
			 */
			title: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			usesComponents: {
				/**
				 * A reference to a component that is implemented as
				 * part of an inventory item.
				 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
				 */
				componentUuid: string,
				props: Metadata.Property[],
				links: Metadata.LINK[],
				responsibleParties: Metadata.ResponsibleParty[],
				remarks: Metadata.Remarks,

			}[],
			remarks: Metadata.Remarks,

		}[];

	}

	/**
	 * Captures an assessor's conclusions regarding the
	 * degree to which an objective is satisfied.
	 */
	export interface ObjectiveStatus {
		/**
		 * Identifies the type of the target.
		 * STRING PATTERN: ^\S(.*\S)?$
		 */
		type: string;
		/**
		 * Identifies the specific target qualified by the
		 * type.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		targetId: string;
		/**
		 * The title for this objective status.
		 */
		title: string;
		/**
		 * A human-readable description of the assessor's
		 * conclusions regarding the degree to which an
		 * objective is satisfied.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * A determination of if the objective is satisfied
		 * or not within a given system.
		 */
		status: {
			/**
			 * An indication as to whether the objective is
			 * satisfied or not.
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			state: string,
			/**
			 * The reason the objective was given it's status.
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			reason: string,
			remarks: Metadata.Remarks,

		};
		implementationStatus: ImplementationCommon.ImplementationStatus;
		remarks: Metadata.Remarks;

	}

	/**
	 * Describes an individual observation.
	 */
	export interface Observation {
		/**
		 * Uniquely identifies this observation. This UUID
		 * may be referenced elsewhere in an OSCAL document
		 * when referring to this information. Once
		 * assigned, a UUID should be consistently used for
		 * a given observation across revisions.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The title for this observation.
		 */
		title: string;
		/**
		 * A human-readable description of this assessment
		 * observation.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		methods: string[];
		types: string[];
		origins: Origin[];
		subjects: IdentifiestheSubject[];
		relevantEvidence: {
			/**
			 * >A resolvable URL reference to relevant evidence.
			 */
			href: string,
			/**
			 * A human-readable description of this evidence.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			remarks: Metadata.Remarks,

		}[];
		/**
		 * Date/time stamp identifying when the finding
		 * information was collected.
		 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
		 */
		collected: string;
		/**
		 * Date/time identifying when the finding
		 * information is out-of-date and no longer valid.
		 * Typically used with continuous assessment
		 * scenarios.
		 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
		 */
		expires: string;
		remarks: Metadata.Remarks;

	}

	/**
	 * Identifies the source of the finding, such as a
	 * tool, interviewed person, or activity.
	 */
	export interface Origin {
		actors: OriginatingActor[];
		relatedTasks: TaskReference[];

	}

	/**
	 * The actor that produces an observation, a
	 * finding, or a risk. One or more actor type can be
	 * used to specify a person that is using a tool.
	 */
	export interface OriginatingActor {
		/**
		 * The kind of actor.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		type: string;
		/**
		 * A pointer to the tool or person based on the
		 * associated type.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		actorUuid: string;
		/**
		 * For a party, this can optionally be used to
		 * specify the role the actor was performing.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		roleId: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];

	}

	/**
	 * Identifies an individual task for which the
	 * containing object is a consequence of.
	 */
	export interface TaskReference {
		/**
		 * References a unique task by UUID.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		taskUuid: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		responsibleParties: Metadata.ResponsibleParty[];
		subjects: SubjectofAssessment[];
		/**
		 * Used to detail assessment subjects that were
		 * identfied by this task.
		 */
		identifiedSubject: {
			/**
			 * References a unique assessment subject
			 * placeholder defined by this task.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			subjectPlaceholderUuid: string,
			subjects: AssessmentCommon.SubjectofAssessment[],

		};
		remarks: Metadata.Remarks;

	}

	/**
	 * A pointer, by ID, to an externally-defined threat.
	 */
	export interface ThreatID {
		/**
		 * Specifies the source of the threat information.
		 */
		system: string;
		/**
		 * An optional location for the threat data, from
		 * which this ID originates.
		 */
		href: string;
		id: string;

	}

	/**
	 * An identified risk.
	 */
	export interface IdentifiedRisk {
		/**
		 * Uniquely identifies this risk. This UUID may be
		 * referenced elsewhere in an OSCAL document when
		 * referring to this information. Once assigned, a
		 * UUID should be consistently used for a given risk
		 * across revisions.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The title for this risk.
		 */
		title: string;
		/**
		 * A human-readable summary of the identified risk,
		 * to include a statement of how the risk impacts
		 * the system.
		 */
		description: string;
		/**
		 * An summary of impact for how the risk affects the
		 * system.
		 */
		statement: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * Describes the status of the associated risk.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		status: string;
		origins: Origin[];
		threatIds: ThreatID[];
		characterizations: Characterization[];
		mitigatingFactors: {
			/**
			 * Uniquely identifies this mitigating factor. This
			 * UUID may be referenced elsewhere in an OSCAL
			 * document when referring to this information. Once
			 * assigned, a UUID should be consistently used for
			 * a given mitigating factor across revisions.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			/**
			 * Points to an implementation statement in the SSP.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			implementationUuid: string,
			/**
			 * A human-readable description of this mitigating
			 * factor.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			subjects: AssessmentCommon.IdentifiestheSubject[],

		}[];
		/**
		 * The date/time by which the risk must be resolved.
		 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
		 */
		deadline: string;
		remediations: RiskResponse[];
		/**
		 * A log of all risk-related tasks taken.
		 */
		riskLog: {
			entries: {
				/**
				 * Uniquely identifies a risk log entry. This UUID
				 * may be referenced elsewhere in an OSCAL document
				 * when referring to this information. A UUID should
				 * be consistently used for this schedule across
				 * revisions of the document.
				 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
				 */
				uuid: string,
				/**
				 * The title for this risk log entry.
				 */
				title: string,
				/**
				 * A human-readable description of what was done
				 * regarding the risk.
				 */
				description: string,
				/**
				 * Identifies the start date and time of the event.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				start: string,
				/**
				 * Identifies the end date and time of the event. If
				 * the event is a point in time, the start and end
				 * will be the same date and time.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				end: string,
				props: Metadata.Property[],
				links: Metadata.LINK[],
				loggedBy: AssessmentCommon.LoggedBy[],
				statusChange: AssessmentCommon.RiskStatus,
				relatedResponses: {
					/**
					 * References a unique risk response by UUID.
					 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
					 */
					responseUuid: string,
					props: Metadata.Property[],
					links: Metadata.LINK[],
					relatedTasks: AssessmentCommon.TaskReference[],
					remarks: Metadata.Remarks,

				}[],
				remarks: Metadata.Remarks,

			}[],

		};
		relatedObservations: {
			/**
			 * References an observation defined in the list of
			 * observations.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			observationUuid: string,

		}[];

	}

	/**
	 * Used to indicate who created a log entry in what
	 * role.
	 */
	export interface LoggedBy {
		/**
		 * A pointer to the party who is making the log
		 * entry.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		partyUuid: string;
		/**
		 * A point to the role-id of the role in which the
		 * party is making the log entry.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		roleId: string;

	}

	/**
	 * Describes the status of the associated risk.
	 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
	 */
	export type RiskStatus = string;
	/**
	 * A collection of descriptive data about the
	 * containing object from a specific origin.
	 */
	export interface Characterization {
		props: Metadata.Property[];
		links: Metadata.LINK[];
		origin: Origin;
		facets: {
			/**
			 * The name of the risk metric within the specified
			 * system.
			 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
			 */
			name: string,
			/**
			 * Specifies the naming system under which this risk
			 * metric is organized, which allows for the same
			 * names to be used in different systems controlled
			 * by different parties. This avoids the potential
			 * of a name clash.
			 */
			system: string,
			/**
			 * Indicates the value of the facet.
			 * STRING PATTERN: ^\S(.*\S)?$
			 */
			value: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			remarks: Metadata.Remarks,

		}[];

	}

	/**
	 * Describes either recommended or an actual plan
	 * for addressing the risk.
	 */
	export interface RiskResponse {
		/**
		 * Uniquely identifies this remediation. This UUID
		 * may be referenced elsewhere in an OSCAL document
		 * when referring to this information. Once
		 * assigned, a UUID should be consistently used for
		 * a given remediation across revisions.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * Identifies whether this is a recommendation, such
		 * as from an assessor or tool, or an actual plan
		 * accepted by the system owner.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		lifecycle: string;
		/**
		 * The title for this response activity.
		 */
		title: string;
		/**
		 * A human-readable description of this response
		 * plan.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		origins: Origin[];
		requiredAssets: {
			/**
			 * Uniquely identifies this required asset. This
			 * UUID may be referenced elsewhere in an OSCAL
			 * document when referring to this information. Once
			 * assigned, a UUID should be consistently used for
			 * a given required asset across revisions.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			uuid: string,
			subjects: AssessmentCommon.IdentifiestheSubject[],
			/**
			 * The title for this required asset.
			 */
			title: string,
			/**
			 * A human-readable description of this required
			 * asset.
			 */
			description: string,
			props: Metadata.Property[],
			links: Metadata.LINK[],
			remarks: Metadata.Remarks,

		}[];
		tasks: TASK[];
		remarks: Metadata.Remarks;

	}

	/**
	 * A partition of an assessment plan or results or a
	 * child of another part.
	 */
	export interface AssessmentPart {
		/**
		 * A unique identifier for a specific part instance.
		 * This identifier's uniqueness is document scoped
		 * and is intended to be consistent for the same
		 * part across minor revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * A textual label that uniquely identifies the
		 * part's semantic type.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		name: string;
		/**
		 * A namespace qualifying the part's name. This
		 * allows different organizations to associate
		 * distinct semantics with the same name.
		 */
		ns: string;
		/**
		 * A textual label that provides a sub-type or
		 * characterization of the part's name. This can be
		 * used to further distinguish or discriminate
		 * between the semantics of multiple parts of the
		 * same control with the same name and ns.
		 * STRING PATTERN: ^[_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-\.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$
		 */
		class: string;
		/**
		 * A name given to the part, which may be used by a
		 * tool for display and navigation.
		 */
		title: string;
		props: Metadata.Property[];
		/**
		 * Permits multiple paragraphs, lists, tables etc.
		 */
		prose: string;
		parts: AssessmentPart[];
		links: Metadata.LINK[];

	}


}
export namespace AR {
	/**
	 * Security assessment results, such as those
	 * provided by a FedRAMP assessor in the FedRAMP
	 * Security Assessment Report.
	 */
	export interface SecurityAssessmentResults {
		/**
		 * Uniquely identifies this assessment results file.
		 * This UUID must be changed each time the content
		 * of the results changes.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		importAp: ImportAssessmentPlan;
		/**
		 * Used to define data objects that are used in the
		 * assessment plan, that do not appear in the
		 * referenced SSP.
		 */
		localDefinitions: {
			objectivesAndMethods: AssessmentCommon.AssessmentSpecificControlObjective[],
			activities: AssessmentCommon.Activity[],
			remarks: Metadata.Remarks,

		};
		results: AssessmentResult[];
		backMatter: Metadata.Backmatter;

	}

	/**
	 * Used by the assessment results and POA&M. In the
	 * assessment results, this identifies all of the
	 * assessment observations and findings, initial and
	 * residual risks, deviations, and disposition. In
	 * the POA&M, this identifies initial and residual
	 * risks, deviations, and disposition.
	 */
	export interface AssessmentResult {
		/**
		 * Uniquely identifies this set of results. This
		 * UUID may be referenced elsewhere in an OSCAL
		 * document when referring to this information. Once
		 * assigned, a UUID should be consistently used for
		 * a given set of results across revisions.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The title for this set of results.
		 */
		title: string;
		/**
		 * A human-readable description of this set of test
		 * results.
		 */
		description: string;
		/**
		 * Date/time stamp identifying the start of the
		 * evidence collection reflected in these results.
		 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
		 */
		start: string;
		/**
		 * Date/time stamp identifying the end of the
		 * evidence collection reflected in these results.
		 * In a continuous motoring scenario, this may
		 * contain the same value as start if appropriate.
		 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
		 */
		end: string;
		prop: Metadata.Property[];
		links: Metadata.LINK[];
		/**
		 * Used to define data objects that are used in the
		 * assessment plan, that do not appear in the
		 * referenced SSP.
		 */
		localDefinitions: {
			components: ImplementationCommon.Component[],
			inventoryItems: ImplementationCommon.InventoryItem[],
			users: ImplementationCommon.SystemUser[],
			assessmentAssets: AssessmentCommon.AssessmentAssets,
			tasks: AssessmentCommon.TASK[],

		};
		reviewedControls: AssessmentCommon.ReviewedControlsandControlObjectives;
		attestations: {
			responsibleParties: Metadata.ResponsibleParty[],
			parts: AssessmentCommon.AssessmentPart[],

		}[];
		/**
		 * A log of all assessment-related actions taken.
		 */
		assessmentLog: {
			entries: {
				/**
				 * Uniquely identifies an assessment event. This
				 * UUID may be referenced elsewhere in an OSCAL
				 * document when referring to this information. A
				 * UUID should be consistently used for this
				 * schedule across revisions of the document.
				 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
				 */
				uuid: string,
				/**
				 * The title for this event.
				 */
				title: string,
				/**
				 * A human-readable description of this event.
				 */
				description: string,
				/**
				 * Identifies the start date and time of an event.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				start: string,
				/**
				 * Identifies the end date and time of an event. If
				 * the event is a point in time, the start and end
				 * will be the same date and time.
				 * STRING PATTERN: ^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$
				 */
				end: string,
				props: Metadata.Property[],
				links: Metadata.LINK[],
				loggedBy: AssessmentCommon.LoggedBy[],
				relatedTasks: AssessmentCommon.TaskReference[],
				remarks: Metadata.Remarks,

			}[],

		};
		observations: AssessmentCommon.Observation[];
		risks: AssessmentCommon.IdentifiedRisk[];
		findings: Finding[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Describes an individual finding.
	 */
	export interface Finding {
		/**
		 * Uniquely identifies this finding. This UUID may
		 * be referenced elsewhere in an OSCAL document when
		 * referring to this information. Once assigned, a
		 * UUID should be consistently used for a given
		 * finding across revisions.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The title for this finding.
		 */
		title: string;
		/**
		 * A human-readable description of this finding.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		origins: AssessmentCommon.Origin[];
		target: AssessmentCommon.ObjectiveStatus;
		/**
		 * Identifies the implementation statement in the
		 * SSP to which this finding is related.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		implementationStatementUuid: string;
		relatedObservations: {
			/**
			 * References an observation defined in the list of
			 * observations.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			observationUuid: string,

		}[];
		relatedRisks: {
			/**
			 * References an risk defined in the list of risks.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			riskUuid: string,

		}[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Used by assessment-results to import information
	 * about the original plan for assessing the system.
	 */
	export interface ImportAssessmentPlan {
		/**
		 * >A resolvable URL reference to the assessment
		 * plan governing the assessment activities.
		 */
		href: string;
		remarks: Metadata.Remarks;

	}


}
export namespace POAM {
	/**
	 * A plan of action and milestones which identifies
	 * initial and residual risks, deviations, and
	 * disposition, such as those required by FedRAMP.
	 */
	export interface PlanofActionandMilestones {
		/**
		 * Uniquely identifies this POA&M. This UUID must be
		 * changed each time the content of the POA&M
		 * changes.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		metadata: Metadata.Publicationmetadata;
		importSsp: AssessmentCommon.ImportSystemSecurityPlan;
		systemId: ImplementationCommon.SystemIdentification;
		localDefinitions: LocalDefinitions;
		observations: AssessmentCommon.Observation[];
		risks: AssessmentCommon.IdentifiedRisk[];
		poamItems: POAMItem[];
		backMatter: Metadata.Backmatter;

	}

	/**
	 * Allows components, and inventory-items to be
	 * defined within the POA&M for circumstances where
	 * no OSCAL-based SSP exists, or is not delivered
	 * with the POA&M.
	 */
	export interface LocalDefinitions {
		components: ImplementationCommon.Component[];
		inventoryItems: ImplementationCommon.InventoryItem[];
		remarks: Metadata.Remarks;

	}

	/**
	 * Describes an individual POA&M item.
	 */
	export interface POAMItem {
		/**
		 * Uniquely identifies the POA&M entry. This UUID
		 * may be referenced elsewhere in an OSCAL document
		 * when referring to this information. A UUID should
		 * be consistently used for a given POA&M item
		 * across revisions of the document.
		 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
		 */
		uuid: string;
		/**
		 * The title or name for this POA&M item .
		 */
		title: string;
		/**
		 * A human-readable description of POA&M item.
		 */
		description: string;
		props: Metadata.Property[];
		links: Metadata.LINK[];
		origins: {
			actors: AssessmentCommon.OriginatingActor[],

		}[];
		relatedObservations: {
			/**
			 * References an observation defined in the list of
			 * observations.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			observationUuid: string,

		}[];
		relatedRisks: {
			/**
			 * References an risk defined in the list of risks.
			 * STRING PATTERN: ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
			 */
			riskUuid: string,

		}[];
		remarks: Metadata.Remarks;

	}


}
