import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateWithoutContestTypeInput } from "../inputs/BerryFlavorCreateWithoutContestTypeInput";
import { BerryFlavorUpdateWithoutContestTypeInput } from "../inputs/BerryFlavorUpdateWithoutContestTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpsertWithWhereUniqueWithoutContestTypeInput", {})
export class BerryFlavorUpsertWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateWithoutContestTypeInput, {
    nullable: false
  })
  update!: BerryFlavorUpdateWithoutContestTypeInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateWithoutContestTypeInput, {
    nullable: false
  })
  create!: BerryFlavorCreateWithoutContestTypeInput;
}
