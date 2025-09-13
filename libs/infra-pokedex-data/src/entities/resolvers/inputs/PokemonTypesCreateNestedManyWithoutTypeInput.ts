import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateManyTypeInputEnvelope } from "../inputs/PokemonTypesCreateManyTypeInputEnvelope";
import { PokemonTypesCreateOrConnectWithoutTypeInput } from "../inputs/PokemonTypesCreateOrConnectWithoutTypeInput";
import { PokemonTypesCreateWithoutTypeInput } from "../inputs/PokemonTypesCreateWithoutTypeInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesCreateNestedManyWithoutTypeInput", {})
export class PokemonTypesCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonTypesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypesWhereUniqueInput[] | undefined;
}
