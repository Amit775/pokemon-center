import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutDecreasedStatInput } from "../inputs/NatureCreateWithoutDecreasedStatInput";
import { NatureUpdateWithoutDecreasedStatInput } from "../inputs/NatureUpdateWithoutDecreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpsertWithWhereUniqueWithoutDecreasedStatInput", {})
export class NatureUpsertWithWhereUniqueWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutDecreasedStatInput, {
    nullable: false
  })
  update!: NatureUpdateWithoutDecreasedStatInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutDecreasedStatInput, {
    nullable: false
  })
  create!: NatureCreateWithoutDecreasedStatInput;
}
