import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsWhereInput } from "../inputs/EvolutionChainsWhereInput";

@TypeGraphQL.InputType("EvolutionChainsListRelationFilter", {})
export class EvolutionChainsListRelationFilter {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  every?: EvolutionChainsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  some?: EvolutionChainsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  none?: EvolutionChainsWhereInput | undefined;
}
