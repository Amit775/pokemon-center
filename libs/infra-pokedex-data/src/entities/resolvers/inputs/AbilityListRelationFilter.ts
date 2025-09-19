import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityWhereInput } from "../inputs/AbilityWhereInput";

@TypeGraphQL.InputType("AbilityListRelationFilter", {})
export class AbilityListRelationFilter {
  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  every?: AbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  some?: AbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  none?: AbilityWhereInput | undefined;
}
