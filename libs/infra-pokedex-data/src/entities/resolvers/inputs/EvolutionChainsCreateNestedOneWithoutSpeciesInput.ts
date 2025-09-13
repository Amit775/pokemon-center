import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateOrConnectWithoutSpeciesInput } from "../inputs/EvolutionChainsCreateOrConnectWithoutSpeciesInput";
import { EvolutionChainsCreateWithoutSpeciesInput } from "../inputs/EvolutionChainsCreateWithoutSpeciesInput";
import { EvolutionChainsWhereUniqueInput } from "../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainsCreateNestedOneWithoutSpeciesInput", {})
export class EvolutionChainsCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainsCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: EvolutionChainsCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: EvolutionChainsCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: true
  })
  connect?: EvolutionChainsWhereUniqueInput | undefined;
}
