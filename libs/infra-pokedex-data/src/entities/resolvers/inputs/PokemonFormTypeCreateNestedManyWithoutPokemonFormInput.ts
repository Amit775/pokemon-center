import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormTypeCreateManyPokemonFormInputEnvelope";
import { PokemonFormTypeCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormTypeCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormTypeCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypeCreateWithoutPokemonFormInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateNestedManyWithoutPokemonFormInput", {})
export class PokemonFormTypeCreateNestedManyWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormTypeCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypeCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypeCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypeWhereUniqueInput[] | undefined;
}
