import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateManySpeciesInputEnvelope } from "../inputs/PokemonCreateManySpeciesInputEnvelope";
import { PokemonCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonCreateOrConnectWithoutSpeciesInput";
import { PokemonCreateWithoutSpeciesInput } from "../inputs/PokemonCreateWithoutSpeciesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedManyWithoutSpeciesInput", {})
export class PokemonCreateNestedManyWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput[] | undefined;
}
