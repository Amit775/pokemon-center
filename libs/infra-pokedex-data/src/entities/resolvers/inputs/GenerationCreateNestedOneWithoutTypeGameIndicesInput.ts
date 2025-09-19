import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutTypeGameIndicesInput } from "../inputs/GenerationCreateOrConnectWithoutTypeGameIndicesInput";
import { GenerationCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationCreateWithoutTypeGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedOneWithoutTypeGameIndicesInput", {})
export class GenerationCreateNestedOneWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutTypeGameIndicesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutTypeGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;
}
