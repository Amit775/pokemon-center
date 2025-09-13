import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateWithoutSpeciesInput } from "../inputs/EvolutionChainsCreateWithoutSpeciesInput";
import { EvolutionChainsWhereUniqueInput } from "../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainsCreateOrConnectWithoutSpeciesInput", {})
export class EvolutionChainsCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EvolutionChainsCreateWithoutSpeciesInput;
}
