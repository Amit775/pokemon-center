import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateManyGenerationInputEnvelope } from "../inputs/TypeGameIndicesCreateManyGenerationInputEnvelope";
import { TypeGameIndicesCreateOrConnectWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateOrConnectWithoutGenerationInput";
import { TypeGameIndicesCreateWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateWithoutGenerationInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateNestedManyWithoutGenerationInput", {})
export class TypeGameIndicesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypeGameIndicesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndicesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndicesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndicesWhereUniqueInput[] | undefined;
}
