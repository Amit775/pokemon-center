import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateManyTypeInputEnvelope } from "../inputs/TypeGameIndicesCreateManyTypeInputEnvelope";
import { TypeGameIndicesCreateOrConnectWithoutTypeInput } from "../inputs/TypeGameIndicesCreateOrConnectWithoutTypeInput";
import { TypeGameIndicesCreateWithoutTypeInput } from "../inputs/TypeGameIndicesCreateWithoutTypeInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateNestedManyWithoutTypeInput", {})
export class TypeGameIndicesCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: TypeGameIndicesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndicesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndicesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndicesWhereUniqueInput[] | undefined;
}
