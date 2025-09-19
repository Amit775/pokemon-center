import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateManyPokemonInputEnvelope } from "../inputs/PokemonFormCreateManyPokemonInputEnvelope";
import { PokemonFormCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonFormCreateOrConnectWithoutPokemonInput";
import { PokemonFormCreateWithoutPokemonInput } from "../inputs/PokemonFormCreateWithoutPokemonInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateNestedManyWithoutPokemonInput", {})
export class PokemonFormCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonFormCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonFormCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput[] | undefined;
}
