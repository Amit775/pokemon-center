import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyTargetInputEnvelope } from "../inputs/MovesCreateManyTargetInputEnvelope";
import { MovesCreateOrConnectWithoutTargetInput } from "../inputs/MovesCreateOrConnectWithoutTargetInput";
import { MovesCreateWithoutTargetInput } from "../inputs/MovesCreateWithoutTargetInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutTargetInput } from "../inputs/MovesUpdateManyWithWhereWithoutTargetInput";
import { MovesUpdateWithWhereUniqueWithoutTargetInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutTargetInput";
import { MovesUpsertWithWhereUniqueWithoutTargetInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutTargetInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutTargetNestedInput", {})
export class MovesUpdateManyWithoutTargetNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutTargetInput], {
    nullable: true
  })
  create?: MovesCreateWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutTargetInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutTargetInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyTargetInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyTargetInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutTargetInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutTargetInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
