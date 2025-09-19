import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessWhereUniqueInput } from "../../../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFirmnessWhereUniqueInput;
}
