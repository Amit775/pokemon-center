import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateManyTypeInputEnvelope } from "../inputs/PokemonTypeCreateManyTypeInputEnvelope";
import { PokemonTypeCreateOrConnectWithoutTypeInput } from "../inputs/PokemonTypeCreateOrConnectWithoutTypeInput";
import { PokemonTypeCreateWithoutTypeInput } from "../inputs/PokemonTypeCreateWithoutTypeInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeCreateNestedManyWithoutTypeInput", {})
export class PokemonTypeCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonTypeCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypeCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypeWhereUniqueInput[] | undefined;
}
