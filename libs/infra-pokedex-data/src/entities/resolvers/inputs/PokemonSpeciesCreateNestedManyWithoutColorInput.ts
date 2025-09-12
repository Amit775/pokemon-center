import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyColorInputEnvelope } from "../inputs/PokemonSpeciesCreateManyColorInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutColorInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutColorInput";
import { PokemonSpeciesCreateWithoutColorInput } from "../inputs/PokemonSpeciesCreateWithoutColorInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutColorInput", {})
export class PokemonSpeciesCreateNestedManyWithoutColorInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutColorInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutColorInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyColorInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyColorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
