import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessCreateManyInput } from "../../../inputs/BerryFirmnessCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => [BerryFirmnessCreateManyInput], {
    nullable: false
  })
  data!: BerryFirmnessCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
