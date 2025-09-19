import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateWithoutLocationGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutLocationGameIndicesInput", {})
export class GenerationCreateOrConnectWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutLocationGameIndicesInput;
}
