import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateManyTypeInputEnvelope } from "../inputs/PokemonFormTypesCreateManyTypeInputEnvelope";
import { PokemonFormTypesCreateOrConnectWithoutTypeInput } from "../inputs/PokemonFormTypesCreateOrConnectWithoutTypeInput";
import { PokemonFormTypesCreateWithoutTypeInput } from "../inputs/PokemonFormTypesCreateWithoutTypeInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateNestedManyWithoutTypeInput", {})
export class PokemonFormTypesCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonFormTypesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypesWhereUniqueInput[] | undefined;
}
