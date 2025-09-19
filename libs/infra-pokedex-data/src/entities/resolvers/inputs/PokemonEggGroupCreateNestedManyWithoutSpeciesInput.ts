import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateManySpeciesInputEnvelope } from "../inputs/PokemonEggGroupCreateManySpeciesInputEnvelope";
import { PokemonEggGroupCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateOrConnectWithoutSpeciesInput";
import { PokemonEggGroupCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateWithoutSpeciesInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateNestedManyWithoutSpeciesInput", {})
export class PokemonEggGroupCreateNestedManyWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonEggGroupCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEggGroupWhereUniqueInput[] | undefined;
}
