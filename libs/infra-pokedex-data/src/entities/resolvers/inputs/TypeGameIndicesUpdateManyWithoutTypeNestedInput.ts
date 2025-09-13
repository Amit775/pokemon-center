import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateManyTypeInputEnvelope } from "../inputs/TypeGameIndicesCreateManyTypeInputEnvelope";
import { TypeGameIndicesCreateOrConnectWithoutTypeInput } from "../inputs/TypeGameIndicesCreateOrConnectWithoutTypeInput";
import { TypeGameIndicesCreateWithoutTypeInput } from "../inputs/TypeGameIndicesCreateWithoutTypeInput";
import { TypeGameIndicesScalarWhereInput } from "../inputs/TypeGameIndicesScalarWhereInput";
import { TypeGameIndicesUpdateManyWithWhereWithoutTypeInput } from "../inputs/TypeGameIndicesUpdateManyWithWhereWithoutTypeInput";
import { TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput";
import { TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateManyWithoutTypeNestedInput", {})
export class TypeGameIndicesUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: TypeGameIndicesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndicesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndicesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: TypeGameIndicesUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeGameIndicesScalarWhereInput[] | undefined;
}
