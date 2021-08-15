import { 
    Catalog,
    CatalogCommon,
    Metadata,
    Profile,
    ComponentDefinition,
    ImplementationCommon,
    SSP,
    AP,
    AssessmentCommon,
    AR,
    POAM 
} from 'oscal-types';

const catalog_control: Catalog.Control = {
    id: '',
    class: '',
    title: '',
    params: [],
    props: [],
    links: [],
    parts: [],
    controls: []
};

const catalog_controlgroup: Catalog.ControlGroup = {
    id: '',
    class: '',
    title: '',
    params: [],
    props: [],
    links: [],
    parts: [],
    groups: [],
    controls: []
};
