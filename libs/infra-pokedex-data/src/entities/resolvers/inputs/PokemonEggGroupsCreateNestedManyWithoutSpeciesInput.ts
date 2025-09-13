import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateManySpeciesInputEnvelope } from "../inputs/PokemonEggGroupsCreateManySpeciesInputEnvelope";
import { PokemonEggGroupsCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonEggGroupsCreateOrConnectWithoutSpeciesInput";
import { PokemonEggGroupsCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupsCreateWithoutSpeciesInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateNestedManyWithoutSpeciesInput", {})
export class PokemonEggGroupsCreateNestedManyWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonEggGroupsCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupsCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupsCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEggGroupsWhereUniqueInput[] | undefined;
}
