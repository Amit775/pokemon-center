import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateManyTypeInputEnvelope } from "../inputs/PokemonTypeCreateManyTypeInputEnvelope";
import { PokemonTypeCreateOrConnectWithoutTypeInput } from "../inputs/PokemonTypeCreateOrConnectWithoutTypeInput";
import { PokemonTypeCreateWithoutTypeInput } from "../inputs/PokemonTypeCreateWithoutTypeInput";
import { PokemonTypeScalarWhereInput } from "../inputs/PokemonTypeScalarWhereInput";
import { PokemonTypeUpdateManyWithWhereWithoutTypeInput } from "../inputs/PokemonTypeUpdateManyWithWhereWithoutTypeInput";
import { PokemonTypeUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonTypeUpdateWithWhereUniqueWithoutTypeInput";
import { PokemonTypeUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonTypeUpsertWithWhereUniqueWithoutTypeInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeUpdateManyWithoutTypeNestedInput", {})
export class PokemonTypeUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonTypeCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: PokemonTypeUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypeCreateManyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonTypeUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: PokemonTypeUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: PokemonTypeUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonTypeScalarWhereInput[] | undefined;
}
