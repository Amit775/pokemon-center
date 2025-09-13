import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormGenerationsCreateManyPokemonFormInputEnvelope";
import { PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateWithoutPokemonFormInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput", {})
export class PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormGenerationsCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationsCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationsWhereUniqueInput[] | undefined;
}
