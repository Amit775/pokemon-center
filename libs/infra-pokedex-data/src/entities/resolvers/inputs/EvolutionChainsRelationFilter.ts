import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsWhereInput } from "../inputs/EvolutionChainsWhereInput";

@TypeGraphQL.InputType("EvolutionChainsRelationFilter", {})
export class EvolutionChainsRelationFilter {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  is?: EvolutionChainsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  isNot?: EvolutionChainsWhereInput | undefined;
}
