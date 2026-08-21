/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type CurrentRegulationQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentRegulationQuery = { currentRegulation: { id: number, code: string, name: string, startsOn: string, endsOn: string, isCurrent: boolean, legalCount: number, notes: string | null } | null };

export type RegulationListQueryVariables = Exact<{ [key: string]: never; }>;


export type RegulationListQuery = { regulations: Array<{ id: number, code: string, name: string, startsOn: string, endsOn: string, isCurrent: boolean, legalCount: number }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const CurrentRegulationDocument = new TypedDocumentString(`
    query CurrentRegulation {
  currentRegulation {
    id
    code
    name
    startsOn
    endsOn
    isCurrent
    legalCount
    notes
  }
}
    `) as unknown as TypedDocumentString<CurrentRegulationQuery, CurrentRegulationQueryVariables>;
export const RegulationListDocument = new TypedDocumentString(`
    query RegulationList {
  regulations {
    id
    code
    name
    startsOn
    endsOn
    isCurrent
    legalCount
  }
}
    `) as unknown as TypedDocumentString<RegulationListQuery, RegulationListQueryVariables>;