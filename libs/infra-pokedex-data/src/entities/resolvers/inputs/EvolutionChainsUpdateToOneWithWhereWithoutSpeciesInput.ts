import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsUpdateWithoutSpeciesInput } from "../inputs/EvolutionChainsUpdateWithoutSpeciesInput";
import { EvolutionChainsWhereInput } from "../inputs/EvolutionChainsWhereInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput", {})
export class EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  where?: EvolutionChainsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: EvolutionChainsUpdateWithoutSpeciesInput;
}
