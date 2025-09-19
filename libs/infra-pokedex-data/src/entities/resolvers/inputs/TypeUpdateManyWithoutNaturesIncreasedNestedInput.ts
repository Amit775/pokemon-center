import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutNaturesIncreasedInput } from "../inputs/TypeCreateOrConnectWithoutNaturesIncreasedInput";
import { TypeCreateWithoutNaturesIncreasedInput } from "../inputs/TypeCreateWithoutNaturesIncreasedInput";
import { TypeScalarWhereInput } from "../inputs/TypeScalarWhereInput";
import { TypeUpdateManyWithWhereWithoutNaturesIncreasedInput } from "../inputs/TypeUpdateManyWithWhereWithoutNaturesIncreasedInput";
import { TypeUpdateWithWhereUniqueWithoutNaturesIncreasedInput } from "../inputs/TypeUpdateWithWhereUniqueWithoutNaturesIncreasedInput";
import { TypeUpsertWithWhereUniqueWithoutNaturesIncreasedInput } from "../inputs/TypeUpsertWithWhereUniqueWithoutNaturesIncreasedInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateManyWithoutNaturesIncreasedNestedInput", {})
export class TypeUpdateManyWithoutNaturesIncreasedNestedInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutNaturesIncreasedInput], {
    nullable: true
  })
  create?: TypeCreateWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutNaturesIncreasedInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpsertWithWhereUniqueWithoutNaturesIncreasedInput], {
    nullable: true
  })
  upsert?: TypeUpsertWithWhereUniqueWithoutNaturesIncreasedInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TypeUpdateWithWhereUniqueWithoutNaturesIncreasedInput], {
    nullable: true
  })
  update?: TypeUpdateWithWhereUniqueWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateManyWithWhereWithoutNaturesIncreasedInput], {
    nullable: true
  })
  updateMany?: TypeUpdateManyWithWhereWithoutNaturesIncreasedInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeScalarWhereInput[] | undefined;
}
