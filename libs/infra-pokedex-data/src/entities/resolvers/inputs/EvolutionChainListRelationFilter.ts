import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainWhereInput } from "../inputs/EvolutionChainWhereInput";

@TypeGraphQL.InputType("EvolutionChainListRelationFilter", {})
export class EvolutionChainListRelationFilter {
  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  every?: EvolutionChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  some?: EvolutionChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  none?: EvolutionChainWhereInput | undefined;
}
