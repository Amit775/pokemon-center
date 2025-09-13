import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormTypesCreateManyPokemonFormInputEnvelope";
import { PokemonFormTypesCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormTypesCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateWithoutPokemonFormInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateNestedManyWithoutPokemonFormInput", {})
export class PokemonFormTypesCreateNestedManyWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormTypesCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypesCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypesCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypesWhereUniqueInput[] | undefined;
}
