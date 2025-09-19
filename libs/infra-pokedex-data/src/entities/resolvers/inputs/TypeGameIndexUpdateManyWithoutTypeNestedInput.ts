import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateManyTypeInputEnvelope } from "../inputs/TypeGameIndexCreateManyTypeInputEnvelope";
import { TypeGameIndexCreateOrConnectWithoutTypeInput } from "../inputs/TypeGameIndexCreateOrConnectWithoutTypeInput";
import { TypeGameIndexCreateWithoutTypeInput } from "../inputs/TypeGameIndexCreateWithoutTypeInput";
import { TypeGameIndexScalarWhereInput } from "../inputs/TypeGameIndexScalarWhereInput";
import { TypeGameIndexUpdateManyWithWhereWithoutTypeInput } from "../inputs/TypeGameIndexUpdateManyWithWhereWithoutTypeInput";
import { TypeGameIndexUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/TypeGameIndexUpdateWithWhereUniqueWithoutTypeInput";
import { TypeGameIndexUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/TypeGameIndexUpsertWithWhereUniqueWithoutTypeInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexUpdateManyWithoutTypeNestedInput", {})
export class TypeGameIndexUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateWithoutTypeInput], {
    nullable: true
  })
  create?: TypeGameIndexCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndexCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: TypeGameIndexUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndexCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: TypeGameIndexUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: TypeGameIndexUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeGameIndexScalarWhereInput[] | undefined;
}
