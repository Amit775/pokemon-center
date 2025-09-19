import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutNaturesInput } from "../inputs/TypeCreateOrConnectWithoutNaturesInput";
import { TypeCreateWithoutNaturesInput } from "../inputs/TypeCreateWithoutNaturesInput";
import { TypeScalarWhereInput } from "../inputs/TypeScalarWhereInput";
import { TypeUpdateManyWithWhereWithoutNaturesInput } from "../inputs/TypeUpdateManyWithWhereWithoutNaturesInput";
import { TypeUpdateWithWhereUniqueWithoutNaturesInput } from "../inputs/TypeUpdateWithWhereUniqueWithoutNaturesInput";
import { TypeUpsertWithWhereUniqueWithoutNaturesInput } from "../inputs/TypeUpsertWithWhereUniqueWithoutNaturesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateManyWithoutNaturesNestedInput", {})
export class TypeUpdateManyWithoutNaturesNestedInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutNaturesInput], {
    nullable: true
  })
  create?: TypeCreateWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutNaturesInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpsertWithWhereUniqueWithoutNaturesInput], {
    nullable: true
  })
  upsert?: TypeUpsertWithWhereUniqueWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  set?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateWithWhereUniqueWithoutNaturesInput], {
    nullable: true
  })
  update?: TypeUpdateWithWhereUniqueWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateManyWithWhereWithoutNaturesInput], {
    nullable: true
  })
  updateMany?: TypeUpdateManyWithWhereWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeScalarWhereInput[] | undefined;
}
