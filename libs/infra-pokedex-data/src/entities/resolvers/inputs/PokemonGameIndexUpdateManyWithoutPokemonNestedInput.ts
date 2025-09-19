import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateManyPokemonInputEnvelope } from "../inputs/PokemonGameIndexCreateManyPokemonInputEnvelope";
import { PokemonGameIndexCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateOrConnectWithoutPokemonInput";
import { PokemonGameIndexCreateWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateWithoutPokemonInput";
import { PokemonGameIndexScalarWhereInput } from "../inputs/PokemonGameIndexScalarWhereInput";
import { PokemonGameIndexUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonGameIndexUpdateManyWithWhereWithoutPokemonInput";
import { PokemonGameIndexUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonGameIndexUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonGameIndexUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonGameIndexUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexUpdateManyWithoutPokemonNestedInput", {})
export class PokemonGameIndexUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonGameIndexCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndexCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonGameIndexUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndexCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonGameIndexUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonGameIndexUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonGameIndexScalarWhereInput[] | undefined;
}
