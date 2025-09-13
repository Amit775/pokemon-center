import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateManyPokemonInputEnvelope } from "../inputs/PokemonTypesCreateManyPokemonInputEnvelope";
import { PokemonTypesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonTypesCreateOrConnectWithoutPokemonInput";
import { PokemonTypesCreateWithoutPokemonInput } from "../inputs/PokemonTypesCreateWithoutPokemonInput";
import { PokemonTypesScalarWhereInput } from "../inputs/PokemonTypesScalarWhereInput";
import { PokemonTypesUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonTypesUpdateManyWithWhereWithoutPokemonInput";
import { PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesUpdateManyWithoutPokemonNestedInput", {})
export class PokemonTypesUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonTypesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonTypesUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonTypesScalarWhereInput[] | undefined;
}
