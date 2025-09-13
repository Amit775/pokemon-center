import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesWhereInput } from "../inputs/AbilitiesWhereInput";

@TypeGraphQL.InputType("AbilitiesListRelationFilter", {})
export class AbilitiesListRelationFilter {
  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  every?: AbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  some?: AbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  none?: AbilitiesWhereInput | undefined;
}
