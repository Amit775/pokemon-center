import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyPokemonInputEnvelope } from "../inputs/PokemonMoveCreateManyPokemonInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonMoveCreateOrConnectWithoutPokemonInput";
import { PokemonMoveCreateWithoutPokemonInput } from "../inputs/PokemonMoveCreateWithoutPokemonInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateNestedManyWithoutPokemonInput", {})
export class PokemonMoveCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;
}
