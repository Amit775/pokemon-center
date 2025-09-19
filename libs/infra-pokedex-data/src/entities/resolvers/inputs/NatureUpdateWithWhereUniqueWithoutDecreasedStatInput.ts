import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureUpdateWithoutDecreasedStatInput } from "../inputs/NatureUpdateWithoutDecreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateWithWhereUniqueWithoutDecreasedStatInput", {})
export class NatureUpdateWithWhereUniqueWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutDecreasedStatInput, {
    nullable: false
  })
  data!: NatureUpdateWithoutDecreasedStatInput;
}
