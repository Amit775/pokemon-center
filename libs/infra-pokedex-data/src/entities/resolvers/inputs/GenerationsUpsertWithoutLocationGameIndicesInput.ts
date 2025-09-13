import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateWithoutLocationGameIndicesInput";
import { GenerationsUpdateWithoutLocationGameIndicesInput } from "../inputs/GenerationsUpdateWithoutLocationGameIndicesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutLocationGameIndicesInput", {})
export class GenerationsUpsertWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutLocationGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutLocationGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
