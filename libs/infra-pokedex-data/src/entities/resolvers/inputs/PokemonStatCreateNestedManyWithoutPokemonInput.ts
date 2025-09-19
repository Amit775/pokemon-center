import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateManyPokemonInputEnvelope } from "../inputs/PokemonStatCreateManyPokemonInputEnvelope";
import { PokemonStatCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonStatCreateOrConnectWithoutPokemonInput";
import { PokemonStatCreateWithoutPokemonInput } from "../inputs/PokemonStatCreateWithoutPokemonInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatCreateNestedManyWithoutPokemonInput", {})
export class PokemonStatCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonStatCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonStatCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatWhereUniqueInput[] | undefined;
}
