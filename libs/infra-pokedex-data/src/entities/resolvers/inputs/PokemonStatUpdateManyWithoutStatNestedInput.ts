import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateManyStatInputEnvelope } from "../inputs/PokemonStatCreateManyStatInputEnvelope";
import { PokemonStatCreateOrConnectWithoutStatInput } from "../inputs/PokemonStatCreateOrConnectWithoutStatInput";
import { PokemonStatCreateWithoutStatInput } from "../inputs/PokemonStatCreateWithoutStatInput";
import { PokemonStatScalarWhereInput } from "../inputs/PokemonStatScalarWhereInput";
import { PokemonStatUpdateManyWithWhereWithoutStatInput } from "../inputs/PokemonStatUpdateManyWithWhereWithoutStatInput";
import { PokemonStatUpdateWithWhereUniqueWithoutStatInput } from "../inputs/PokemonStatUpdateWithWhereUniqueWithoutStatInput";
import { PokemonStatUpsertWithWhereUniqueWithoutStatInput } from "../inputs/PokemonStatUpsertWithWhereUniqueWithoutStatInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatUpdateManyWithoutStatNestedInput", {})
export class PokemonStatUpdateManyWithoutStatNestedInput {
  @TypeGraphQL.Field(_type => [PokemonStatCreateWithoutStatInput], {
    nullable: true
  })
  create?: PokemonStatCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatUpsertWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  upsert?: PokemonStatUpsertWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatUpdateWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  update?: PokemonStatUpdateWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatUpdateManyWithWhereWithoutStatInput], {
    nullable: true
  })
  updateMany?: PokemonStatUpdateManyWithWhereWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonStatScalarWhereInput[] | undefined;
}
