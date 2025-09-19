import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateManyPokemonInputEnvelope } from "../inputs/PokemonTypeCreateManyPokemonInputEnvelope";
import { PokemonTypeCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonTypeCreateOrConnectWithoutPokemonInput";
import { PokemonTypeCreateWithoutPokemonInput } from "../inputs/PokemonTypeCreateWithoutPokemonInput";
import { PokemonTypeScalarWhereInput } from "../inputs/PokemonTypeScalarWhereInput";
import { PokemonTypeUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonTypeUpdateManyWithWhereWithoutPokemonInput";
import { PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeUpdateManyWithoutPokemonNestedInput", {})
export class PokemonTypeUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonTypeCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypeCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonTypeScalarWhereInput[] | undefined;
}
