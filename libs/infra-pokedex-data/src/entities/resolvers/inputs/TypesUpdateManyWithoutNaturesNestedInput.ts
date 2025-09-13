import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutNaturesInput } from "../inputs/TypesCreateOrConnectWithoutNaturesInput";
import { TypesCreateWithoutNaturesInput } from "../inputs/TypesCreateWithoutNaturesInput";
import { TypesScalarWhereInput } from "../inputs/TypesScalarWhereInput";
import { TypesUpdateManyWithWhereWithoutNaturesInput } from "../inputs/TypesUpdateManyWithWhereWithoutNaturesInput";
import { TypesUpdateWithWhereUniqueWithoutNaturesInput } from "../inputs/TypesUpdateWithWhereUniqueWithoutNaturesInput";
import { TypesUpsertWithWhereUniqueWithoutNaturesInput } from "../inputs/TypesUpsertWithWhereUniqueWithoutNaturesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateManyWithoutNaturesNestedInput", {})
export class TypesUpdateManyWithoutNaturesNestedInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutNaturesInput], {
    nullable: true
  })
  create?: TypesCreateWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutNaturesInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpsertWithWhereUniqueWithoutNaturesInput], {
    nullable: true
  })
  upsert?: TypesUpsertWithWhereUniqueWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  set?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  delete?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateWithWhereUniqueWithoutNaturesInput], {
    nullable: true
  })
  update?: TypesUpdateWithWhereUniqueWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateManyWithWhereWithoutNaturesInput], {
    nullable: true
  })
  updateMany?: TypesUpdateManyWithWhereWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypesScalarWhereInput[] | undefined;
}
