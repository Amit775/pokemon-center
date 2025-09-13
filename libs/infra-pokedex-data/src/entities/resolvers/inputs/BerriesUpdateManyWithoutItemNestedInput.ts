import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyItemInputEnvelope } from "../inputs/BerriesCreateManyItemInputEnvelope";
import { BerriesCreateOrConnectWithoutItemInput } from "../inputs/BerriesCreateOrConnectWithoutItemInput";
import { BerriesCreateWithoutItemInput } from "../inputs/BerriesCreateWithoutItemInput";
import { BerriesScalarWhereInput } from "../inputs/BerriesScalarWhereInput";
import { BerriesUpdateManyWithWhereWithoutItemInput } from "../inputs/BerriesUpdateManyWithWhereWithoutItemInput";
import { BerriesUpdateWithWhereUniqueWithoutItemInput } from "../inputs/BerriesUpdateWithWhereUniqueWithoutItemInput";
import { BerriesUpsertWithWhereUniqueWithoutItemInput } from "../inputs/BerriesUpsertWithWhereUniqueWithoutItemInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateManyWithoutItemNestedInput", {})
export class BerriesUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [BerriesCreateWithoutItemInput], {
    nullable: true
  })
  create?: BerriesCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: BerriesUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: BerriesCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  set?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  delete?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: BerriesUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: BerriesUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerriesScalarWhereInput[] | undefined;
}
