import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormGenerationCreateManyPokemonFormInputEnvelope";
import { PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormGenerationCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateWithoutPokemonFormInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateNestedManyWithoutPokemonFormInput", {})
export class PokemonFormGenerationCreateNestedManyWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormGenerationCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationWhereUniqueInput[] | undefined;
}
