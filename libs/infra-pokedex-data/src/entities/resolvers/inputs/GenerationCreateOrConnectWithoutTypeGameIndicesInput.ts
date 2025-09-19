import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationCreateWithoutTypeGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutTypeGameIndicesInput", {})
export class GenerationCreateOrConnectWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutTypeGameIndicesInput;
}
