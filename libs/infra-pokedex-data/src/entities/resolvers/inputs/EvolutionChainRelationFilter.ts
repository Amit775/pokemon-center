import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainWhereInput } from "../inputs/EvolutionChainWhereInput";

@TypeGraphQL.InputType("EvolutionChainRelationFilter", {})
export class EvolutionChainRelationFilter {
  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  is?: EvolutionChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  isNot?: EvolutionChainWhereInput | undefined;
}
