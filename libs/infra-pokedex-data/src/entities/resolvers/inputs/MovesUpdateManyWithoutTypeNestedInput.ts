import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyTypeInputEnvelope } from "../inputs/MovesCreateManyTypeInputEnvelope";
import { MovesCreateOrConnectWithoutTypeInput } from "../inputs/MovesCreateOrConnectWithoutTypeInput";
import { MovesCreateWithoutTypeInput } from "../inputs/MovesCreateWithoutTypeInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutTypeInput } from "../inputs/MovesUpdateManyWithWhereWithoutTypeInput";
import { MovesUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutTypeInput";
import { MovesUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutTypeNestedInput", {})
export class MovesUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: MovesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  set?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  delete?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
