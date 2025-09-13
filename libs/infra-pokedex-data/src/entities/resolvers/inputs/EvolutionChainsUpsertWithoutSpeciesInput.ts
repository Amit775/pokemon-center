import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateWithoutSpeciesInput } from "../inputs/EvolutionChainsCreateWithoutSpeciesInput";
import { EvolutionChainsUpdateWithoutSpeciesInput } from "../inputs/EvolutionChainsUpdateWithoutSpeciesInput";
import { EvolutionChainsWhereInput } from "../inputs/EvolutionChainsWhereInput";

@TypeGraphQL.InputType("EvolutionChainsUpsertWithoutSpeciesInput", {})
export class EvolutionChainsUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: EvolutionChainsUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EvolutionChainsCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  where?: EvolutionChainsWhereInput | undefined;
}
