import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateManyPokemonInputEnvelope } from "../inputs/PokemonTypeCreateManyPokemonInputEnvelope";
import { PokemonTypeCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonTypeCreateOrConnectWithoutPokemonInput";
import { PokemonTypeCreateWithoutPokemonInput } from "../inputs/PokemonTypeCreateWithoutPokemonInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeCreateNestedManyWithoutPokemonInput", {})
export class PokemonTypeCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonTypeCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypeCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypeWhereUniqueInput[] | undefined;
}
