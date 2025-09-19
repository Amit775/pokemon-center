import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureUpdateWithoutIncreasedStatInput } from "../inputs/NatureUpdateWithoutIncreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateWithWhereUniqueWithoutIncreasedStatInput", {})
export class NatureUpdateWithWhereUniqueWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutIncreasedStatInput, {
    nullable: false
  })
  data!: NatureUpdateWithoutIncreasedStatInput;
}
