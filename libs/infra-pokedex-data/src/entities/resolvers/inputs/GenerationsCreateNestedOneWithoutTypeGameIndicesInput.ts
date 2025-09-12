import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateOrConnectWithoutTypeGameIndicesInput";
import { GenerationsCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateWithoutTypeGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutTypeGameIndicesInput", {})
export class GenerationsCreateNestedOneWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypeGameIndicesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutTypeGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
